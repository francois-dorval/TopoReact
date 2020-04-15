import React from 'react';
import renderer from 'react-test-renderer';

import SecteurData from '../util/SecteurData';




describe('go', () => {

  beforeEach(() => {
 //   NavigationTestUtils.resetInternalState();
  });

  it(`gets menu data`, () => {
    let secteurs = SecteurData.getSecteursData();
    console.log("secteurs "+JSON.stringify(secteurs))
    //expect(secteur.id).toEqual("plou");

  });




});
