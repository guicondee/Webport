const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `.profile .ident, .profile .info-All, .profile .tecs, .profile .experiences, .profile .education
  `,
  { interval: 100 }
)

const redReveal = ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 700,
  reset: true
})

redReveal.reveal(
  `.widgtes .navbar, .widgtes .cards .card-1, .widgtes .navbar-2, .widgtes .post
  `,
  { interval: 100 }
)
