const isuia1YSurgicalOutcomeTable = {
  'young': {
    'anterior': {
      'small': 5,
      'medium': 4,
      'large': 23
    },
    'posterior': {
      'small': 11,
      'medium': 29,
      'large': 44,
    }
  },
  'old': {
    'anterior': {
      'small': 11.5,
      'medium': 25,
      'large': 32
    },
    'posterior': {
      'small': 12,
      'medium': 43,
      'large': null,
    }
  }
}

export function isuia1YSurgicalOutcome(age, location, size) {
  var ageBucket = 'old';
  if (age < 50) {
    ageBucket = 'young';
  }

  var locationBucket = 'anterior';
  if (location === 7 || location === 8) {
    locationBucket = 'posterior';
  }
  var sizeBucket = 'small';
  if (size > 12) {
    sizeBucket = 'medium';
  }
  if (size > 24) {
    sizeBucket = ';arge'
  }

  return isuia1YSurgicalOutcomeTable[ageBucket][locationBucket][sizeBucket];
};

const isuia5YRuptureRiskTable = {
  'xsmall': {
    'anterior': {
      'group1': 0,
      'group2': 1.5
    },
    'posterior': {
      'group1': 2.5,
      'group2': 3.4
    },
    'cca': {
      'group1': 0,
      'group2': 0
    }
  },
  'small': {
    'cca': 0,
    'anterior': 2.6,
    'posterior': 14.5
  },
  'medium': {
    'cca': 30,
    'anterior': 14.5,
    'posterior': 18.4
  },
  'large': {
    'cca': 6.4,
    'anterior': 40,
    'posterior': 50
  },
}


export function isuia5YRuptureRisk(location, size, hxSAH) {
  var locationBucket = 'anterior';
  if (location === 7 || location === 8) {
    locationBucket = 'posterior';
  } else if (location === 9) {
    locationBucket = 'cca';
  }

  var sizeBucket = 'xsmall';
  if (size > 7) {
    sizeBucket = 'small';
  } else if (size > 12) {
    sizeBucket = 'medium'
  } else if (size > 24) {
    sizeBucket = 'large'
  };

  if (sizeBucket === 'xsmall') {
    var group = hxSAH === true ? 'group1' : 'group2'
    return isuia5YRuptureRiskTable[sizeBucket][locationBucket][group]
  } else {
    return isuia5YRuptureRiskTable[sizeBucket][locationBucket]
  }
}


export function calculatePhases(patient) {
  var total = 0;
  var percent = 0;
  if (patient.ethnicity == 1) {
    total = total + 5;
  } else if (patient.ethnicity == 2) {
    total = total + 3;
  };
  if (patient.htn === true) {
    total = total + 1;
  };
  if (patient.age >= 70) {
    total = total + 1;
  };

  if (patient.lesionDiameter > 20) {
    total = total + 10;
  } else if (patient.lesionDiameter > 10) {
    total = total + 6;
  } else if (patient.lesionDiameter > 7) {
    total = total + 3
  } else {
    //do nothing
  }

  if (patient.hxSAH === true) {
    total = total + 1
  }
  if (patient.lesionLocation <= 1) {
    //do nothing
  } else if (patient.lesionLocation == 5) {
    total = total + 2;
  } else {
    total = total + 4;
  }

  if (total >= 12) {
    percent = 17.8;
  } else if (total >= 11) {
    percent = 7.2;
  } else if (total >= 10) {
    percent = 5.3;
  } else if (total >= 9) {
    percent = 4.3;
  } else if (total >= 8) {
    percent = 3.2;
  } else if (total >= 7) {
    percent = 2.4;
  } else if (total >= 6) {
    percent = 1.7;
  } else if (total >= 5) {
    percent = 1.3;
  } else if (total >= 4) {
    percent = .9;
  } else if (total >= 3) {
    percent = .7;
  } else {
    percent = .4;
  }
  return percent;
}



const ucasYearlyRuptureRateTable = {
  'Middle Cerebral Artery': {
    '3-4': .23,
    '5-6': .31,
    '7-9': 1.56,
    '10-24': 4.11,
    '>25': 16.87
  },
  'Anterior Communicating Artery': {
    '3-4': .9,
    '5-6': .75,
    '7-9': 1.97,
    '10-24': 5.24,
    '>25': 39.77
  },
  'Internal Carotid Artery': {
    '3-4': .14,
    '5-6': 0,
    '7-9': 1.19,
    '10-24': 1.07,
    '>25': 10.61
  },
  'Posterior Communicating Artery': {
    '3-4': .41,
    '5-6': 1,
    '7-9': 3.19,
    '10-24': 6.12,
    '>25': 126.97
  },
  'Basilar Tip': {
    '3-4': .23,
    '5-6': .46,
    '7-9': .97,
    '10-24': 6.94,
    '>25': 117.82
  },
  'Superior Cerebellar Artery': {
    '3-4': .23,
    '5-6': .46,
    '7-9': .97,
    '10-24': 6.94,
    '>25': 117.82
  },
  'Other Posterior': {
    '3-4': .23,
    '5-6': .46,
    '7-9': .97,
    '10-24': 6.94,
    '>25': 117.82
  },
  'Other': {
    '3-4': .78,
    '5-6': 1.37,
    '7-9': 0,
    '10-24': 2.81,
    '>25': 0
  },
  'Total': {
    '3-4': .36,
    '5-6': .5,
    '7-9': 1.69,
    '10-24': 4.37,
    '>25': 33.4
  },
}


export function ucasYearlyRuptureRate(location, size) {

  var locationBucket = "";
  switch(parseInt(location)) {
    case 1:
      locationBucket = "Internal Carotid Artery";
      break;
    case 2:
      locationBucket = "Anterior Cerebral Artery";
      break;
    case 3:
      locationBucket = "Anterior Communicating Artery";
      break;
    case 5:
      locationBucket = "Middle Cerebral Artery";
      break;
    case 6:
      locationBucket = "Posterior Communicating Artery";
      break;
    case 7:
      locationBucket = "Basilar Tip";
      break;
    case 8:
      locationBucket = "Other Posterior Circulation";
      break;
    default:
      locationBucket = "Total"
  }

  var sizeBucket = '3-4';
  if (size >= 4.5 && size < 6.5) {
    sizeBucket = '5-6'
  } else if (size >= 6.5 && size < 9.5) {
    sizeBucket = '7-9'
  } else if (size >= 9.5 && size < 24.5) {
    sizeBucket = '10-24'
  } else if (size >= 24.6) {
    sizeBucket = '>25'
  }

  return ucasYearlyRuptureRateTable[locationBucket][sizeBucket]
}
