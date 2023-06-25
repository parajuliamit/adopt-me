async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const page = queryKey[2];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page}`
  );
  if (!apiRes.ok) {
    throw new Error(`pets fetch not ok`);
  }
  return apiRes.json();
}

export default fetchSearch;
