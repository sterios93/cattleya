/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: {
      6: {
        a26: {
          apartmentNum: 'A26',
          details: {
            bedrooms: 1,
            bathrooms: 1,
            floor: 6,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Добре дошли в апартамент номер 22!Този просторен двустаен апартамент се състои от ..... (кух. Бокс и тн). Бъдещият му собственик ще се наслаждава на слънчевите лъчи идващи с изгрева благодарение на прекрасното юго-източно изложение на апартанента и ще може да релаксира на двете просторни тераси (квадратурата на терасите).',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment26.jpg',
          sold: true,
        },
        a25: {
          apartmentNum: 'A25',
          details: {
            bedrooms: 2,
            bathrooms: 2,
            floor: 6,
            brick: 'Тухла',
            balcony: 'Тераса',
          },
          description: 'Добре дошли в апартамент номер 22!Този просторен двустаен апартамент се състои от ..... (кух. Бокс и тн). Бъдещият му собственик ще се наслаждава на слънчевите лъчи идващи с изгрева благодарение на прекрасното юго-източно изложение на апартанента и ще може да релаксира на двете просторни тераси (квадратурата на терасите).',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment25.jpg',
          sold: true,
        },
      },
      5: {
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment24.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment23.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment22.jpg',
          sold: false,
        },
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment21.jpg',
          sold: true,
        },
      },
      4: {
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment20.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment19.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment18.jpg',
          sold: false,
        },
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment17.jpg',
          sold: false,
        },
      },
      3: {
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment16.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment15.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment14.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment13.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment12.jpg',
          sold: false,
        },
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment11.jpg',
          sold: false,
        },
      },
      2: {
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment10.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment9.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment8.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment7.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment6.jpg',
          sold: false,
        },
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment5.jpg',
          sold: false,
        },
      },
      1: {
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment4.jpg',
          sold: false,
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment3.jpg',
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment2.jpg',
          sold: false,
        },
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
          downloadPlanUrl: 'some url',
          imageSrc: 'apartment1.jpg',
          sold: false,
        },
      },
      0: {
        a1: {
          apartmentNum: 'A1',
          details: {
            bedrooms: 6,
            bathrooms: 1,
            floor: 0,
            brick: 'Brick',
          },
          description: 'Добре дошли в апартамент номер 22!Този просторен двустаен апартамент се състои от ..... (кух. Бокс и тн). Бъдещият му собственик ще се наслаждава на слънчевите лъчи идващи с изгрева благодарение на прекрасното юго-източно изложение на апартанента и ще може да релаксира на двете просторни тераси (квадратурата на терасите).',
          features: {
            controlledAccess: 'Контролиран достъп',
            elevator: 'Асансьор',
            parking: 'Свободни парко места',
          },
          downloadPlanUrl: 'some url',
          imageSrc: '',
        },
      },
    },
    project: {
      consist: [
        'Апартаменти - 26',
        '26 паркоместа.',
        'Контролиран достъп.',
        'Видео наблюдение и сигурност.',
        'Лесен достъп до градският транспорт.',
        'Общи части.',
        'Технически съоражения.',
      ],
      location: [
        '1 минута до магазин LIDL',
        '1 минута до скейт парк',
        '2 минути до УНСС',
        '5 минути до НСА',
        '5 минути до ТУ',
        '10 минути до Метростанция Г.М.',
      ],
      introduction: {
        description: 'Сградата е проектирана на 6 надземни етажа и сутерен. В Сутерена са разположени 9 паркоместа, 3 гаража, помещение за абонатна станция  и 26 бр. мазета. Жилищата са 26 на брой, и са разположени както следва: Първи етаж: 3 двустайни и 1 тристаен апартамент, като всеки един от тях притежава собствено дворно място /градина/. Втори етаж: 5 двустайни и 1 тристаен апартамент. Трети етаж: 5 двустайни и 1 тристаен апартамент. Четвърти етаж: 4 тристайни апартамента. Пети етаж: 3 двустайни и 1 тристаен апартамент. Шести етаж: 1 двустаен апартамент и 1 тристаен апартамент. Всичките апартаменти са развити  с оптимална квадратура във високите нива на нормативите за: дневна, спалня и санитарен възел, а от терасите се открива прекрасна гледка към Витоша /разпределения/. ',
        imageSrc: 'projectPage/introduction.jpg',
        heading: 'За Катлея',
        route: '/project',
      },
      environment: {
        description: 'Сграда „Катлея“ се намира в Студентски град, на ул. „Проф. Николай Генчев“ № 14, в кв. № 173, на изключително тихо и спокойно място за живеене на пешеходно разстояние от: НСА, УНСС, Техническият, Лесотехническият и Химикотехнологичните Университети, но в същото време и достатъчно отдалечена от увеселителни заведения и шум /дискотеки, барове и т.н/, на няколко минути пеша от спирките на градския транспорт и маршрутните таксита на бул. „8-ми Декември“ и бул. „Климент Охридски“ в непосредствена близост до Спортен комплекс „Бонсист“ в елитен район с нови тухлени кооперации и еднофамилни къщи.',
        imageSrc: 'projectPage/environment.jpg',
        heading: 'Околна среда',
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
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageSrc: 'about/team.jpg',
        heading: 'За нас',
        route: '/about',
      },
      ceo: {
        description: 'Финансист, предприемач и инвеститор завършил образованието си с отличие в Adams State University, Colorado, USA със специалност Финанси и Международен бизнес. Човек отворен към нови бизнес начинания и възможности с ясно изразени лидерски качества.',
        imageSrc: 'about/ceo.jpg',
        heading: 'Стивън Петров',
        route: '/about',
      },
    },
    selectedFloor: 6,
  },
  mutations: {
    changeSelectedFloor(state, floor) {
      state.selectedFloor = floor;
    },
  },
  actions: {

  },
  getters: {
    getApartments: state => floor => state.apartments[floor],
    getApartment: state => (floor, id) => state.apartments[floor][id.toLowerCase()],
    getProjectDescription: state => state.project,
    getAbout: state => state.about,
    getFloorNumber: state => state.selectedFloor,
  },
});
