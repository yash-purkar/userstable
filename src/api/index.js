import Chance from 'chance'

const chance = Chance();

export const fakeUserDetails = () => {
  return {
    name: chance.name({ middle: true }),
    address: chance.address()
  }
}