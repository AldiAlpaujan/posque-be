const basePath = "/api/v1";

export const publicApiPaths = {
  register: `${basePath}/register`,
  login: `${basePath}/login`,
  logout: `${basePath}/logout`,
};

export const privateApiPaths = {
  employee: `${basePath}/employee`,
  supplier: `${basePath}/supplier`,
  customer: `${basePath}/customer`,
  product: `${basePath}/product`,
}
