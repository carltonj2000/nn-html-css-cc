function handleForm(e) {
  e.preventDefault();
  try {
    const formData = new FormData(document.querySelector("form"));
    let values = {};
    for (let pair of formData.entries()) values[pair[0]] = pair[1];
    console.log(JSON.stringify(values));
  } catch (e) {
    console.log("caught a thrown error");
  }
  return false;
}
