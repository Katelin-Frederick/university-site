const programSection = document.getElementById('programSection')

const renderPrograms = doc => {
  // Create Elements
  let programDiv = document.createElement('div')
  let h2 = document.createElement('h2')
  let paragraph = document.createElement('p')
  let iconDiv = document.createElement('div')
  let icon = document.createElement('i')
  let h3 = document.createElement('h3')

  // Configure Elements
  programDiv.setAttribute('class', 'program')

  h2.setAttribute('class', 'programTitle redText')
  h2.textContent = doc.data().title

  paragraph.setAttribute('class', 'programDescription')
  paragraph.textContent = doc.data().description

  iconDiv.setAttribute('class', 'iconContainer')

  icon.setAttribute('class', `fas fa-${doc.data().icon}`)

  h3.textContent = doc.data().category

  // Append Elements
  programSection.appendChild(programDiv)
  programDiv.appendChild(h2)
  programDiv.appendChild(paragraph)
  programDiv.appendChild(iconDiv)
  iconDiv.appendChild(icon)
  iconDiv.appendChild(h3)
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

    sortedPrograms.forEach(item => renderPrograms(item))
  })