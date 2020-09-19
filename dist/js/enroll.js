const programSection = document.getElementById('programOfInterest')

const renderOptions = doc => {
  // Create Elements
  let programOption = document.createElement('option')

  // Configure Elements
  programOption.setAttribute('value', doc.data().value)

  programOption.textContent = doc.data().title

  // Append Elements
  programSection.appendChild(programOption)
}

db.collection('programs')
  .get()
  .then(snapshot => {
    const sortedPrograms = snapshot.docs.sort((a, b) => {
      if(a.data().title > b.data().title) {
        return 1
      } else if (a.data().title < b.data().title) {
        return -1
      } else {
        return 0
      }
    })

    sortedPrograms.forEach(item => renderOptions(item))
  })