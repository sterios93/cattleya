import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: {
      6: {
        a1: {
          apartmentNum: 'A1',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a2: {
          apartmentNum: 'A2',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a3: {
          apartmentNum: 'A3',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a4: {
          apartmentNum: 'A4',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a5: {
          apartmentNum: 'A5',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
      },
      5: {
        a1: {
          apartmentNum: 'A1',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a2: {
          apartmentNum: 'A2',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a3: {
          apartmentNum: 'A3',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
        a4: {
          apartmentNum: 'A4',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Brick',
          },
          description: 'Some text',
          features: {
            controlledAccess: 'Controllec Access',
            elevator: 'Elevator',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
      },
    },
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getApartments: state => floor => state.apartments[floor],
    getApartment: state => (floor, id) => state.apartments[floor][id.toLowerCase()],
  },
});
