# Aulas de Typescript
🟦 Essas aulas e exercícios de Typescript tem objetivo ajudar iniciantes na linguagem e aprimorar conhecimentos, com aulas em formato de código e exercícios para praticar.

### Typescript é...
Uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}
 
function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

### Como executar os arquivos do repositório
Faça Fork no repositório (isso também fará com que você receba atualizações). Abra o repositório no Codespace ou localmente, e no terminal execute `algo_aqui`.

Site oficial: <a href="https://www.typescriptlang.org/" target="_blank">https://www.typescriptlang.org/</a>
