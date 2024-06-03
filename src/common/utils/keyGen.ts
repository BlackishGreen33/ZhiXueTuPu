function* keyGen() {
  let count = 0;
  while (1) {
    yield count++;
  }
}
export const genKey = keyGen();
