export const copyToClipboard = (text) => {
    return new Promise((resolve, reject) => {
      if (navigator?.clipboard) {
        const cb = navigator.clipboard
  
        cb.writeText(text).then(resolve).catch(reject)
      } else {
        try {
          const body = document.querySelector('body')
  
          const textarea = document.createElement('textarea')
          body?.appendChild(textarea)
  
          textarea.value = text
          textarea.select()
          document.execCommand('copy')
  
          body?.removeChild(textarea)

          alert('已复制')
          resolve()
        } catch (e) {
          reject(e)
        }
      }
    })
  }
  