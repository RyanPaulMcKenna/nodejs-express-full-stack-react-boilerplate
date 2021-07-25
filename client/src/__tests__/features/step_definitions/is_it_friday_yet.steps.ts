import { defineFeature, loadFeature } from 'jest-cucumber';

const assert = require('assert');
const utils = require('../../../../utils/utils');

const feature = loadFeature('src/__tests__/features/is_it_friday_yet.feature');


defineFeature(feature, (test) => {
    test(feature.scenarioOutlines[0].title, ({ given, when, then }) => {
        let today: string;
        let actualAnswer: string;
        given(/^today is (.*)$/, function (givenDay: string) {
            today = givenDay;
        });

        when('I ask whether it\'s Friday yet', function () {
            actualAnswer = utils.isItFriday(today);
        });

        then(/^I should be told (.*)$/, function (expectedAnswer: string) {
            assert.strictEqual(actualAnswer, expectedAnswer);
        });
    });
  });