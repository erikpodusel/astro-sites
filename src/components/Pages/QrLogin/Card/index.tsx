import { Input } from "@components/Input"
import { CSVInput, TLoginHash } from "@components/Input/CSV"
import { QRCodeCanvas } from "qrcode.react"
import { FC, useDeferredValue, useState } from "react"
import { Trans } from "react-i18next"

export const QrLoginCard: FC<{encryptionKey: string}> = () => {
  const [hashes, setHashes] = useState<TLoginHash[]>([])
  const [filter, setFilter] = useState('')
  const deferredFilter = useDeferredValue(filter)

  const handleDownload = (fileName: string) => {
    const qrCode = document.getElementById(fileName) as HTMLCanvasElement
    
    if (!qrCode) return

    const image = qrCode.toDataURL('image/png')
    const anchor = document.createElement('a')
    anchor.href = image 
    anchor.download = `${fileName}.png`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return <div>
    <div className='card'>
      <strong>
        <h2 className="text-xl">
          <Trans>File upload</Trans>
        </h2>
      </strong>

      <CSVInput className='mt-2 w-72' encryptionKey={import.meta.env.PUBLIC_ENCRYPTION_KEY} onButtonPress={setHashes} />
    </div>
    
    {hashes.length > 0 &&
      <div className="card flex flex-wrap flex-row gap-2 mt-4 cursor-pointer">
        <div className="flex flex-row w-full justify-end items-center gap-2">
          <p>Search: </p>
          <Input onChange={({ target }) => setFilter(target.value)} />
        </div>
        {hashes.filter(({fileName}) => fileName.toLowerCase().includes(deferredFilter.toLowerCase())).map(({fileName, value}) => <div key={fileName + value} onClick={() => handleDownload(fileName)}>
            <p>{fileName}</p>
            <QRCodeCanvas value={value} size={178} id={fileName} />
          </div> 
        )}
      </div>
    }
    
    </div> 
}
