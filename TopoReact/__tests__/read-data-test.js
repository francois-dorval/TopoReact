import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import SecteurData from '../util/SecteurData';




describe('go', () => {

  beforeEach(() => {
 //   NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    let secteur = SecteurData.getData("plou");
    console.log("secteur "+secteur)
    expect(secteur.id).toEqual("plou");

  });

  it(`renders the grande_face`, () => {
    let secteur = SecteurData.getData("grande_face");
    console.log("secteur "+secteur)
    expect(secteur.id).toEqual("grande_face");

  });


});
