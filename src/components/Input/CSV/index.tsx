import { Input, InputProps } from '@components/Input'
import type { FC } from 'react'
import { AES }  from 'crypto-js'

export type CSVInputProps = InputProps & { encryptionKey: string, onButtonPress: (hashes: TLoginHash[]) => void }
export type TLoginHash = {fileName: string, value: string}

export const CSVInput: FC<CSVInputProps> = ({ encryptionKey, onButtonPress, ...props }) => {
  const handleOk = () => {
    const fileInput = document.getElementById('csv-file') as HTMLInputElement
    const file = fileInput.files?.[0]

    if (!file) {
      console.error('No file selected!')
      alert('No file selected!')
      return
    }

    const reader = new FileReader()

    reader.readAsText(file)

    reader.onload = (event) => {
      const csvdata = event?.target?.result
      
      if (typeof csvdata !== 'string') return
        
      const rows = csvdata.split('\n')
      const rowCount = rows.length

      const hashes: TLoginHash[] = []

      for(let i = 1; i < rowCount; i++) {
        const row = rows[i]

        if (row.length === 0) continue 

        const [, name, username, password] = row.split(';')

        const loginInfo = { username, password }
        const loginInfoJson = JSON.stringify(loginInfo)
        const encryptedText = AES.encrypt(loginInfoJson, encryptionKey).toString()

        hashes.push({fileName: name, value: encryptedText})
      }

      onButtonPress(hashes)
    }
  }

  return <div id="input-wrapper" className='flex flex-col'>
    <Input type="file" {...props} className={props?.className ?? props?.class ?? ''} accept=".csv" id="csv-file" name="csv-file" />
    <button className="button" onClick={handleOk}>Preview QR codes</button>
  </div>
}
