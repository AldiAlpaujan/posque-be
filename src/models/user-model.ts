export type CreateUserRequest = {
  name: string,
  email: string,
  phone: string,
  password: string
}

export type CreateUserResponse = {
  name: string,
  email: string,
}