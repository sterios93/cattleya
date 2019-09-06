/* eslint-disable no-param-reassign,no-irregular-whitespace */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: {
      6: {
        a25: {
          apartmentNum: 'A25',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 6,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един изключително просторен и добре разположен тристаен апартамент с югоизточно изложение. Апартаментът се намира на ет.6 и се състои от: антре, дневна с кух.бокс и трапезария, 2 спални (едната с дрешник), 2 бани с WC и 3 тераси.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment25.pdf',
          imageSrc: 'apartment25.jpg',
          sold: true,
        },
        a26: {
          apartmentNum: 'A26',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един изключително просторен двустаен апартамент с по-специфично разположение състоящ се от: антре, дневна с кух.бокс и трапезария, спалня със склад и баня с WC, отделно WC и една огромна тераса обгръщаща целият апартамент.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment26.pdf',
          imageSrc: 'apartment26.jpg',
          sold: true,
        },
      },
      5: {
        a21: {
          apartmentNum: 'A21',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един маломерен двустаен апартамент разположен в североизточната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment21.pdf',
          imageSrc: 'apartment21.jpg',
          sold: true,
        },
        a22: {
          apartmentNum: 'A22',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един просторен двустаен апартамент разположен в югоизточната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и две тераси. Правилното разпределение на квадратурата на апартамента предоставя неговия бъдещ собственик с просторна дневна и спални, които са изключително важни за всеки. Югоизточното изложение на апартамент 22 е един от дълготрайните плюсове на които неговия бъдещ собственик ще се наслаждава.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment22.pdf',
          imageSrc: 'apartment22.jpg',
          sold: false,
        },
        a23: {
          apartmentNum: 'A23',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 5,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Този тристаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, 2 спални, 2 бани с WC, стая гардероб и огромна тераса. Това е най-големият апартамент на ет.5 и е страхотен избор за млади семейства или бъдещи такива, заради доброто разположение както на апартамента (големи спални, обособени WC и изключително просторна дневна), така и на терасата, защото нека не забравяме, че когато терасата Ви гледа към Витоша, сутрешните кафета и чашата вино вечер определено придобиват по-добър вкус.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment23.pdf',
          imageSrc: 'apartment23.jpg',
          sold: true,
        },
        a24: {
          apartmentNum: 'A24',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 5,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един маломерен двустаен апартамент разположен в северозападната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса. Предната фасада на сградата от която е част апартаментът е основно изградена от клинкерни плочи, които придават допълнителен стил, класа и красота.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment24.pdf',
          imageSrc: 'apartment24.jpg',
          sold: false,
        },
      },
      4: {
        a17: {
          apartmentNum: 'A17',
          details: {
            bedrooms: 2,
            bathrooms: 1,
            floor: 4,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Този маломерен тристаен апартамент е разположен в североизточната част на сградата и се състои от: антре, дневна с кух. бокс и трапезария, 2 спални, баня с WC и 2 тераси. С тераси гледащи само на изток ап.17 превръща спалнята и дневната на своя собственик в едно слънчево и осветено пространство, което позволява на всеки да забележи и най-малките детайли които правят апартамента различен и красив.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment17.pdf',
          imageSrc: 'apartment17.jpg',
          sold: false,
        },
        a18: {
          apartmentNum: 'A18',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 4,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е още един от маломерните тристайни апартаменти на 4-ти етаж, състоящ се от антре, дневна с кух.бокс и трапезария, 2 спални, 2 бани с WC и тераса. Правилното разпределение на квадратурата на апартамента предоставя неговия бъдещ собственик с просторна дневна и спални, които са изключително важни за всеки. Нещото с което този апартамент изпъква е изключително просторната тераса с югоизточно изложение, която обхваща всички дневни части на апартамента. В допълнение, собственикът на ап.18 получава и тераса с изцяло южно изложение на втората спалня.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment18.pdf',
          imageSrc: 'apartment18.jpg',
          sold: false,
        },
        a19: {
          apartmentNum: 'A19',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 4,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Този тристаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, 2 спални, 2 бани с WC и огромна тераса. Това е най-големият апартамент на ет.4 и е страхотен избор за млади семейства или бъдещи такива, заради доброто разположение както на апартамента (големи спални, обособени WC и изключително просторна дневна), така и на терасата, защото нека не забравяме, че когато терасата Ви гледа към Витоша, сутрешните кафета и чашата вино вечер определено придобиват по-добър вкус.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment19.pdf',
          imageSrc: 'apartment19.jpg',
          sold: false,
        },
        a20: {
          apartmentNum: 'A20',
          details: {
            bedrooms: 2,
            bathrooms: 1,
            floor: 4,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един маломерен тристаен апартамент разположен в северозападната част на сграда Катлея и се състои от: антре, дневна с кух. бокс и трапезария, 2 спални, баня с WC и 2 тераси. Предната фасада на сградата от която е част апартаментът е основно изградена от клинкерни плочи, които придават допълнителен стил, класа и красота',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment20.pdf',
          imageSrc: 'apartment20.jpg',
          sold: false,
        },
      },
      3: {
        a11: {
          apartmentNum: 'A11',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 3,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един от така определените като маломерни-двустайни апартаменти в сграда „Катлея“ разполагащ с: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment11.pdf',
          imageSrc: 'apartment11.jpg',
          sold: true,
        },
        a12: {
          apartmentNum: 'A12',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 3,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Още един маломерен двустаен апартамент, който се състои от: антре, дневна с кух.бокс и трапезария, спалня с дрешник, баня с WC, и тераса. Гледащ само на изток ап.12 превръща спалнята и дневната на своя собственик в едно слънчево и осветено пространство, което позволява на всеки да забележи и най-малките детайли които правят апартамента различен и красив.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment12.pdf',
          imageSrc: 'apartment12.jpg',
          sold: false,
        },
        a13: {
          apartmentNum: 'A13',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 3,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един просторен двустаен апартамент в сграда „Катлея“ разполагащ с: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, склад и тераса. Югоизточното изложение на ап.13 е един от важните дълготрайни плюсове, на които неговият собственик ще се радва.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment13.pdf',
          imageSrc: 'apartment13.jpg',
          sold: true,
        },
        a14: {
          apartmentNum: 'A14',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 3,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Този тристаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, 2 спални, 2 бани с WC и тераса. Това е най-големият апартамент на ет.3 и е страхотен избор за млади семейства или бъдещи такива, заради доброто разположение както на апартамента (големи спални, обособени WC и изключително просторна дневна), така и на терасата, защото нека не забравяме, че когато терасата Ви гледа към Витоша, сутрешните кафета и чашата вино вечер определено придобиват по-добър вкус. ',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment14.pdf',
          imageSrc: 'apartment14.jpg',
          sold: true,
        },
        a15: {
          apartmentNum: 'A15',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 3,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един маломерен двустаен апартамент разположен в западната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса. ',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment15.pdf',
          imageSrc: 'apartment15.jpg',
          sold: true,
        },
        a16: {
          apartmentNum: 'A16',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 3,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един просторен двустаен апартамент разположен в северната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment16.pdf',
          imageSrc: 'apartment16.jpg',
          sold: false,
        },
      },
      2: {
        a5: {
          apartmentNum: 'A5',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 2,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един от така определените като маломерни-двустайни апартаменти в сграда „Катлея“ разполагащ с: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса.Ап. 5 притежава североизточно изложение, което е основно част от предната фасада на сградата, която от своя страна е облицована с клинкерни плочи, придаващи стил, лукс и качество. Апартаментът разполага също така и с тераса, която всяка сутрин гледа към изгряващото слънце от Изток.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment5.pdf',
          imageSrc: 'apartment5.jpg',
          sold: true,
        },
        a6: {
          apartmentNum: 'A6',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 2,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Още един маломерен двустаен апартамент, който се състои от: антре, дневна с кух.бокс и трапезария, спалня с дрешник, баня с WC, и тераса. Гледащ само на изток ап.6 превръща спалнята и дневната на своя собственик в едно слънчево и осветено пространство, което позволява на всеки да забележи и най-малките детайли които правят апартамента различен и красив.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment6.pdf',
          imageSrc: 'apartment6.jpg',
          sold: false,
        },
        a7: {
          apartmentNum: 'A7',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 2,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един просторен двустаен апартамент в сграда „Катлея“ разполагащ с: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, склад и тераса. Югоизточното изложение на ап.7 е един от важните дълготрайни плюсове, на които неговият собственик ще се радва.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment7.pdf',
          imageSrc: 'apartment7.jpg',
          sold: true,
        },
        a8: {
          apartmentNum: 'A8',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 2,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Този тристаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, 2 спални, 2 бани с WC и тераса. Това е най-големият апартамент на ет.2 и е страхотен избор за млади семейства или бъдещи такива, заради доброто разположение както на апартамента (големи спални, обособени WC и изключително просторна дневна), така и на терасата, защото нека не забравяме, че когато терасата Ви гледа към Витоша, сутрешните кафета и чашата вино вечер определено придобиват по-добър вкус.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment8.pdf',
          imageSrc: 'apartment8.jpg',
          sold: true,
        },
        a9: {
          apartmentNum: 'A9',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 2,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един маломерен двустаен апартамент разположен в западната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment9.pdf',
          imageSrc: 'apartment9.jpg',
          sold: true,
        },
        a10: {
          apartmentNum: 'A10',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 2,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Това е един просторен двустаен апартамент разположен в северната част на сградата състоящ се от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и тераса.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment10.pdf',
          imageSrc: 'apartment10.jpg',
          sold: false,
        },
      },
      1: {
        a1: {
          apartmentNum: 'A1',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 1,
            brick: 'Тухла',
            yard: 'Двор',
          },
          description: 'Този просторен двустаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, спалня с дрешник, баня с WC, и двор. Бъдещият му собственик ще се наслаждава на слънчевите лъчи идващи с изгрева благодарение на прекрасното източно изложение на апартанента и ще има възможността да аранжира собствения си двор, по свой вкус, за да се чувства наистина “вкъщи“. ',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment1.pdf',
          imageSrc: 'apartment1.jpg',
          sold: false,
        },
        a2: {
          apartmentNum: 'A2',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 1,
            brick: 'Тухла',
            yard: 'Двор',
          },
          description: 'Този просторен двустаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, спалня, склад, баня с WC, и двор. Макар и сходен по размер на ап. 1, този апартамент разполага с втория по големина двор в сграда „Катлея“, което предоставя невероятна възможност за неговия собственик да разгръне специфична и характерна аранжировка, която да превърне ап. 2в едно малко, комфортно и добре-разположено бижу. Апартаментът разполага с всеобщопризнатото като най-добро изложение, а именно юго-източно.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment2.pdf',
          imageSrc: 'apartment2.jpg',
          sold: true,
        },
        a3: {
          apartmentNum: 'A3',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            yard: 'Двор',
            floor: 1,
            brick: 'Тухла',
          },
          description: 'Този голям тристаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, 2 спални (едната с дрешник), 2 бани с WC и огромен двор. Това е най-големият апартамент на ет.1 и е страхотен избор за млади семейства или бъдещи такива, заради доброто разположение както на апартамента (големи спални, обособени WC и изключително просторна дневна), така и на двора идващ с апартамента.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment3.pdf',
          imageSrc: 'apartment3.jpg',
          sold: true,
        },
        a4: {
          apartmentNum: 'A4',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 1,
            brick: 'Тухла',
            yard: 'Двор',
          },
          description: 'Този просторен двустаен апартамент се състои от: антре, дневна с кух.бокс и трапезария, спалня, баня с WC, и двор. Това е още един прекрасен двустаен апартамент с двор позволяващ развиването на лятна градина, барбекю, алпинеум и т.н. С голяма и просторна дневна ап.4 е мечтата на всяка млада домакиня, която иска да аранжира, декорира и модифицира своя дом, така че да бъде едно приятно, уютно и естетически издържано място.',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/apartment4.pdf',
          imageSrc: 'apartment4.jpg',
          sold: false,
        },
      },
      0: {
        a0: {
          apartmentNum: 'A0',
          details: {
            floor: 0,
            brick: 'Brick',
            parkingSpaces: 9,
            garages: 3,
            basement: 26,
          },
          description: 'Подземният етаж разполага със 9 паркоместа,3 гаража и 26 мазета.',
          basementInfo: {
            sold: `1,2,3,8,9,10,11,14,21,23.`,
          },
          parkingSpaces: {
            free: `1,13.`
          },
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: '/downloads/minusOne.pdf',
          imageSrc: 'minusOne.jpg',
        },
      },
    },
    project: {
      consist: [
        'Апартаменти - 26',
        'Мазета - 26',
        '9 паркоместа',
        '3 гаража',
        'Контролиран достъп',
        'Видео наблюдение и сигурност',
        'Луксозни общи части',
        'Технически съоражения',
      ],
      location: [
        '5 минути до магазин Фантастико',
        '1 минута до скейт парк',
        '2 минути до УНСС',
        '5 минути до НСА',
        '5 минути до ТУ',
        '10 минути до Метростанция Г.М.',
        '5 минути до бъдеща метростанция спортен комплекс НСА, "Акад. Стефан Младенов',
        '5 минути до бъдеща метростанция "Студентски град" при студентска поликлиника',
      ],
      introduction: {
        description:
`Сградата е проектирана на 6 надземни етажа и сутерен. В Сутерена са разположени 9 паркоместа, 3 гаража, помещение за абонатна станция  и 26 бр. мазета. Жилищата са 26 на брой, и са разположени както следва: 
Първи етаж: 3 двустайни и 1 тристаен апартамент, като всеки един от тях притежава собствено дворно място /градина/.
Втори етаж: 5 двустайни и 1 тристаен апартамент.
Трети етаж: 5 двустайни и 1 тристаен апартамент.
Четвърти етаж: 4 тристайни апартамента.
Пети етаж: 3 двустайни и 1 тристаен апартамент.
Шести етаж: 1 двустаен апартамент и 1 тристаен апартамент.
Всичките апартаменти са развити  с оптимална квадратура във високите нива на нормативите за: дневна, спалня и санитарен възел, а от терасите се открива прекрасна гледка към Витоша /разпределения/.`,
        imageSrc: 'projectPage/introduction.jpg',
        heading: 'За Катлея',
        route: '/project',
      },
      environment: {
        description: 'Сграда „Катлея“ се намира в Студентски град, на ул. „Проф. Николай Генчев“ № 14, в новият луксозен квартал Mountain View, на изключително тихо и спокойно място за живеене на пешеходно разстояние от: НСА, УНСС, Техническият, Лесотехническият и Химикотехнологичните Университети, но в същото време и достатъчно отдалечена от увеселителни заведения и шум /дискотеки, барове и т.н/, на няколко минути пеша от спирките на градския транспорт и маршрутните таксита на бул. „8-ми Декември“ и бул. „Климент Охридски“ в непосредствена близост до Спортен комплекс „Бонсист“ в елитен район с нови тухлени кооперации и еднофамилни къщи.',
        imageSrc: 'projectPage/environment.jpg',
        heading: 'Локация',
        route: '/project',
      },
      architectural: {
        description: 'Сградата е тухлена и се отличава със съвременна архитектура /фасади/, използвани са нови технологии и висококачествени материали: Фасада от клинкерни плочи, Дограма: „Инолтик“ 5 камерна;   Асансьр: „Орона“ - 6 местен , Луксозни общи части: мраморни стълбища, парапети: само от стъкло най - високия клас - мат, Отопление:  освен централната топлофикация всички апартаменти са с изводи  и за климатизация /сплит система/.  Контролиран достъп вход-изход на сградата с 24-часова жива охрана /портиер/ и постоянен видео-контрол.  Жилищата се продават на шпакловка и замазка, като към всяко от тях има: мазе и идеална част от дворното място. Предвид добрата локация Сграда „Катлея“ предлага прекрасни условия и подходяща среда за покупка на имоти както с цел - постоянно живеене, така и за имоти закупени с инвестиционна цел.',
        imageSrc: 'projectPage/project.jpg',
        heading: 'Характеристики',
        route: '/project',
      },
    },
    about: {
      team: {
        description: 'Вилидж Релакс ЕООД е активен инвеститор в строителство, директно участващ във всичките етапи и процеси от реализирането на своите проекти. Чрез изградената широка мрежа от бизнес партньорства с някои от лидерите в индустрията, разпростиращи се в секторите архитектура и дизайн; строеж и конструкция, продажба и промотиране Вилидж Релакс ЕООД успява да оптимизира ефективността на цялостния процес, както и да осигури най-високо качество на предлаганите от нас услуги и продукти. Ние ще Ви помогнем да направите вашият мечтан дом реалност. Споделете с нас Вашите идеи и гледайте как нашият екип им вдъхва живот.',
        imageSrc: 'about/team2.jpg',
        heading: 'За нас',
        route: '/about',
      },
      ceo: {
        description: 'Финансист, предприемач и инвеститор завършил образованието си с отличие в Adams State University, Colorado, USA със специалност Финанси и Международен бизнес. Предприемач отворен към нови бизнес начинания и възможности с ясно изразени лидерски качества. Инвеститор, който макар и само на 25г. има зад гърба си успешно реализирани инвестиции и бизнес проекти в различни пазарни ниши и сегменти. Бизнесмен, който знае че най-важното нещо за успеха на една компания е сформирането на висококвалифициран, опитен, професионален и силно организиран екип, който с успешната си работа да движи компанията напред. Менажирането на капитал, преценяването на риска свързан с всяка една инвестиция, следенето на световната и европейска икономическа, политическа и гео-политическа обстановка, изготвянето на ясен и подробен бизнес план по който компанията да се движи, както и правилната оценка на ефективността и продуктивността на този план са едни от основните умения на г-н Петров, с които той успява да направи Вилидж Релакс ЕООД успешна.',
        imageSrc: 'about/ceo.jpg',
        heading: 'Стивън Петров',
        route: '/about',
      },
    },
    selectedFloor: 6,
    totalFloors: 6,
    salesStats: {
      soldApartments: 14,
      freeApartments: 12,
      totalApartments: 26,
    },
    map: {
      center: {
        lat: 42.649435,
        lng: 23.354145 
      },
      marker: {
        lat: 42.649435,
        lng: 23.354145
      }
    }
  },
  mutations: {
    CHANGE_SELECTED_FLOOR: (state, payload) => state.selectedFloor = payload,
  },
  actions: {
    changeSelectedFloor: ({ commit }, payload) => commit('CHANGE_SELECTED_FLOOR', payload)
  },
  getters: {
    getApartments: state => floor => state.apartments[floor],
    getApartment: state => (floor, id) => state.apartments[floor][id.toLowerCase()],
    getProjectDescription: state => state.project,
    getAbout: state => state.about,
    getFloorNumber: state => state.selectedFloor,
    getContacts: state => state.contacts,
    getSalesStats: state => state.salesStats,
    getMapInfo: state => ({center: state.map.center, marker: state.map.marker}),
    getFloorsCount: state => state.totalFloors,
  },
});
