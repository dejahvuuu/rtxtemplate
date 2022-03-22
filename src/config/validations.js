import * as yup from 'yup';

const regularExpressions = {
  alphabeticalspace: /^['a-z ']{3,40}$/i,
  alphabeticalnum: /^['a-z 0-9']{3,12}$/i,
  companyNumberRuc: /^[0-9]+$/,
  emailValid:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  userpassword: /^[\w!@*\-?¡¿+/.,#ñÑ]+$/,
};

const objectRules = {
  email: yup
    .string()
    .required('errors.email.required')
    .matches(regularExpressions.emailValid, 'errors.email.regex'),
  password: yup
    .string()
    .required('errors.password.required')
    .min(8, 'errors.password.min')
    .max(25, 'errors.password.max')
    .matches(regularExpressions.userpassword, 'errors.password.regex'),
  passwordConfirmation: yup
    .string()
    .required('errors.passwordConfirmation.required')
    .min(8, 'errors.password.min')
    .max(25, 'errors.password.max')
    .oneOf([yup.ref('password')], 'errors.passwordConfirmation.matching')
    .matches(regularExpressions.userpassword, 'errors.password.regex'),
  firstName: yup
    .string()
    .required('errors.firstName.required')
    .matches(regularExpressions.alphabeticalspace, 'errors.firstName.regex'),
  middleName: yup.string().matches(regularExpressions.alphabeticalspace, {
    message: 'errors.middleName.regex',
    excludeEmptyString: true,
  }),
  firstSurname: yup
    .string()
    .required('errors.firstSurname.required')
    .matches(regularExpressions.alphabeticalspace, 'errors.firstSurname.regex'),
  secondLastname: yup.string().matches(regularExpressions.alphabeticalspace, {
    message: 'errors.secondLastname.regex',
    excludeEmptyString: true,
  }),
  through: yup.string().required('errors.radioRequired').nullable(),
  specify: yup.string().required('errors.specifyOption.required'),
  tradeName: yup.string().required('errors.companyName.required'),
  rucNumber: yup
    .string()
    .required('errors.companyRuc.required')
    .max(11, 'errors.companyRuc.max')
    .matches(regularExpressions.companyNumberRuc, 'errors.companyRuc.regex'),
  activity: yup.string().required('errors.selectRequired'),
  address: yup.string().required('errors.taxAddress.required'),
  district: yup.string().required('errors.districtResidence.required'),
  department: yup.string().required('errors.homeDepartment.required'),
  province: yup.string().required('errors.provinceResidence.required'),
  officePhone: yup
    .string()
    .required('errors.officePhoneNumber.required')
    .max(9, 'errors.officePhoneNumber.max')
    .matches(
      regularExpressions.companyNumberRuc,
      'errors.officePhoneNumber.regex'
    ),
  webPage: yup.string(),
  documentNumber: yup
    .string()
    .required('errors.documentNumber.required')
    .matches(regularExpressions.alphabeticalnum, 'errors.documentNumber.regex'),
  documentType: yup.string().required('errors.selectRequired'),
  personalPhone: yup
    .string()
    .notRequired()
    .when('interCode', (interCode) => {
      switch (interCode) {
        case 'CO':
        case 'VE':
          return yup
            .string()
            .required('errors.personalPhoneCoVe.required')
            .max(10, 'errors.personalPhoneCoVe.max')
            .matches(
              regularExpressions.companyNumberRuc,
              'errors.personalPhoneCoVe.regex'
            );
        case 'EC':
          return yup
            .string()
            .required('errors.personalPhoneEc.required')
            .max(8, 'errors.personalPhoneEc.max')
            .matches(
              regularExpressions.companyNumberRuc,
              'errors.personalPhoneEc.regex'
            );
        default:
          return yup
            .string()
            .required('errors.personalPhonePePrUs.required')
            .max(7, 'errors.personalPhonePePrUs.max')
            .matches(
              regularExpressions.companyNumberRuc,
              'errors.personalPhonePePrUs.regex'
            );
      }
    }),
  phone: yup
    .string()
    .required('errors.phoneNumber.required')
    .max(9, 'errors.phoneNumber.max')
    .matches(regularExpressions.companyNumberRuc, 'errors.phoneNumber.regex'),
  positionCompany: yup
    .string()
    .notRequired()
    .when('pep', {
      is: (val) => val === 'yes',
      then: yup.string().required('errors.positionCompanyOption.required'),
      otherwise: yup.string().notRequired(),
    }),
  nationality: yup.string().required('errors.nationalityOption.required'),
  countryResidence: yup.string().required('errors.country.required'),
  country: yup.string().required('errors.country.required'),
  institutionName: yup
    .string()
    .notRequired()
    .when('pep', {
      is: (val) => val === 'yes',
      then: yup.string().required('errors.institutionNameOption.required'),
      otherwise: yup.string().notRequired(),
    }),
  interCode: yup.string().required('errors.nationalityOption.required'),
  userNameParentOne: yup
    .string()
    .required('errors.userNameParent.required')
    .matches(
      regularExpressions.alphabeticalspace,
      'errors.userNameParent.regex'
    ),
  doctypeParentOne: yup.string().required('errors.selectRequired'),
  docNumberParentOne: yup
    .string()
    .required('errors.documentNumber.required')
    .matches(regularExpressions.alphabeticalnum, 'errors.documentNumber.regex'),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], 'errors.termsAndConditions.required'),
  name: yup
    .string()
    .required('errors.nameFamilyMember.required')
    .matches(
      regularExpressions.alphabeticalspace,
      'errors.nameFamilyMember.regex'
    ),
  endingYear: yup
    .date()
    .notRequired()
    .when('pep', {
      is: (val) => val === 'yes',
      then: yup.date().required('errors.endingYear.required'),
      otherwise: yup.date().notRequired(),
    }),
  pep: yup.string().required('errors.radioRequired').nullable(),
  literalCopy: yup.string().required('errors.literalCopy.required'),
  validityPower: yup.string().required('errors.validityPower.required'),
  rucFile: yup.string().required('errors.rucFile.required'),
  identityDocuments: yup.string().required('errors.identityDocuments.required'),
  OwnerType: yup.string().required('errors.radioRequired').nullable(),
  notApply: yup.string(),
  businessName: yup.string().required('errors.businessName.required'),
};

export const getSchema = (params = []) => {
  const subset = {};
  params.forEach((rule) => {
    if (typeof rule === 'string' && rule in objectRules)
      subset[rule] = objectRules[rule];

    if (typeof rule === 'object') {
      const groupOfRules = {};
      Object.keys(rule).forEach((nameOfGroup) => {
        if (Array.isArray(rule[nameOfGroup])) {
          Object.values(rule[nameOfGroup]).forEach((ruleInGroup) => {
            if (ruleInGroup in objectRules)
              groupOfRules[ruleInGroup] = objectRules[ruleInGroup];
          });
        }

        if (typeof rule[nameOfGroup] === 'string') {
          const ruleInGroup = rule[nameOfGroup];
          if (ruleInGroup in objectRules)
            groupOfRules[ruleInGroup] = objectRules[ruleInGroup];
        }

        subset[nameOfGroup] = yup.array().of(yup.object().shape(groupOfRules));
      });
    }
  });

  Object.assign({}, subset);

  return yup.object().shape(subset);
};
