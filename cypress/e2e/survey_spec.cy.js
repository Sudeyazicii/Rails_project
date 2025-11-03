describe('Survey Management', () => {
  const token = 'BURAYA_CUCUMBER_TOKEN'; // Cucumber ile oluşturduğun JWT token

  it('Lists surveys for a user', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/surveys',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(0)
    })
  })
})
