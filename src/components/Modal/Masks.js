export const maskname = value => {
  return value
    .replace(/[^A-zÀ-ú-\s]/g, '')
}

export const maskphone = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '($1) $2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

export const maskemail = value => {
    return value
        .replace(/[<>()[\],;:"]/g, '')
}

export const handleAddMask  = (e, mask, setInput, input) => {
  e.persist()
  setInput(inputs => ({ ...inputs, [e.target.name]: mask ? mask(e.target.value) : e.target.value }))
}