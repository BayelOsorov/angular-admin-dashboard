import { LayoutService } from './layout.service';
import { StateService } from './state.service';
import { GeneratePassword } from './generatePassword';
import {
    HttpOptions,
    IdentificationAnswersRu,
    IdentificationAnswersKg,
} from './const';
import { tableNumbering } from './tableNumbering';
import {
    translateMaritalStatus,
    truncateDecimals,
    truncateText,
    cleanEmptyKeyInObj,
    trEngToRusOwnerST,
    downloadFile,
    translateIdentificationLevels,
    checkRolePermission,
    getFileType,
    getProductCode,
    isPhone,
    getAlertStatus,
    getHoursAndMinutes,
} from './helpers';
import {
    Position,
    entrepreneurTypeEnum,
    residenceLocationEnum,
    genderEnum,
    workExperience,
    clientHistoryTypeValue,
    locationMonth,
    dependentsCount,
    maritalStatus,
    placeOfWorkType,
    realEstateItemsEnum,
    personalEstateItemsEnum,
    EducationEnum,
} from './creditAplicationData';

export {
    LayoutService,
    StateService,
    GeneratePassword,
    tableNumbering,
    translateMaritalStatus,
    truncateDecimals,
    truncateText,
    trEngToRusOwnerST,
    cleanEmptyKeyInObj,
    downloadFile,
    translateIdentificationLevels,
    checkRolePermission,
    getFileType,
    getProductCode,
    isPhone,
    getAlertStatus,
    getHoursAndMinutes,
    Position,
    placeOfWorkType,
    entrepreneurTypeEnum,
    residenceLocationEnum,
    genderEnum,
    workExperience,
    clientHistoryTypeValue,
    locationMonth,
    dependentsCount,
    maritalStatus,
    realEstateItemsEnum,
    IdentificationAnswersRu,
    IdentificationAnswersKg,
    personalEstateItemsEnum,
    HttpOptions,
    EducationEnum,
};
