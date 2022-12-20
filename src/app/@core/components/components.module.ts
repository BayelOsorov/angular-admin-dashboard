import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NbAccordionModule,
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbPopoverModule,
    NbSelectModule,
    NbStepperModule,
    NbTabsetModule,
    NbTimepickerModule,
    NbTreeGridModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ChangePasswordModalComponent } from './staff/change-password-modal/change-password-modal.component';
import { CreateStaffModalComponent } from './staff/create-staff-modal/create-staff-modal/create-staff-modal.component';
import { TagActionsModalComponent } from './catalog/tag/tag-actions-modal/tag-actions-modal.component';
import { ProductActionsModalComponent } from './catalog/product/product-actions-modal/product-actions-modal.component';
import { GalleryComponent } from './catalog/partners/gallery/gallery.component';
import { ImageActionsModalComponent } from './catalog/partners/image-actions-modal/image-actions-modal.component';
import { LocalityActionsModalComponent } from './catalog/locality/locality-actions-modal/locality-actions-modal.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BranchesComponent } from './catalog/partners/branches/branches.component';
import { RouterModule } from '@angular/router';
import { WeekdaysComponent } from './catalog/partners/branches/weekdays/weekdays.component';
import { FeedbacksComponent } from './catalog/partners/feedbacks/feedbacks.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { DetailComponent } from './identification/detail/detail.component';
import { NeedToEditComponent } from './identification/need-to-edit/need-to-edit.component';
import { PhotoIdnButtonsComponent } from './identification/photo-idn-buttons/photo-idn-buttons.component';
import { UserVideoComponent } from '../openvidu/user-video.component';
import { OpenViduVideoComponent } from '../openvidu/ov-video.component';
import { OpenviduComponent } from '../openvidu';
import { ValidationInputComponent } from './shared/validation-input/validation-input.component';
import { MessengersComponent } from './catalog/partners/messengers/messengers.component';
import { MessengersActionsModalComponent } from './catalog/partners/messengers/messengers-actions-modal/messengers-actions-modal.component';
import { TableComponent } from './shared/table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FusionChartsModule } from 'angular-fusioncharts';
import { CreditApplicationDetailInfoComponent } from './credit-application/detail-info/detail-info.component';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load Widgets
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

// Load FusionTheme Theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CreditApplicationMoreInfoComponent } from './credit-application/more-info/more-info.component';
import {
    FsIconComponent,
    KibComponent,
} from './credit-application/kib/kib.component';
import { SocFondComponent } from './credit-application/soc-fond/soc-fond.component';
import { IdentificationFilesComponent } from './identification/identification-files/identification-files.component';
import { PassportDataComponent } from './credit-application/passport-data/passport-data.component';
import { AdditionalInfoComponent } from './credit-application/additional-info/additional-info.component';
import { UpdateAmountComponent } from './credit-application/update-amount/update-amount.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { DemoNgZorroAntdModule } from '../utils/ng-zorro-antd.module';
import { CommentsComponent } from './credit-application/comments/comments.component';
import { PhoneNumberInputComponent } from './shared/phone-number-input/phone-number-input.component';
import { FusionChartComponent } from './shared/fusion-chart/fusion-chart.component';
import { ImgInputComponent } from './shared/img-input/img-input.component';
import { MultipleSearchSelectComponent } from './shared/multiple-search-select/multiple-search-select.component';
import { CustomMapComponent } from './shared/custom-map/custom-map.component';
import { AvatarImgComponent } from './shared/avatar-img/avatar-img.component';
import { EditorComponent } from './shared/editor/editor.component';
import { LocalizationInputsComponent } from './shared/localization-inputs/localization-inputs.component';
import { SearchSelectComponent } from './shared/search-select/search-select.component';
import { UseHttpImageSourcePipe } from './shared/secured-image/secured-image.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { LightboxImgComponent } from './shared/lightbox-img/lightbox-img.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ContragentsDetailComponent } from './contragents/contragents-detail/contragents-detail.component';
import { BeneficiaresComponent } from './contragents/beneficiares/beneficiares.component';
import { EmployeesComponent } from './contragents/employees/employees.component';
import { BeneficiaresActionsComponent } from './contragents/beneficiares/beneficiares-actions-modal/beneficiares-actions.component';
import { LegalContractorBeneficiaryActionsComponent } from './contragents/beneficiares/legal-contractor-beneficiary-actions/legal-contractor-beneficiary-actions.component';
import { LegalContragentActionsModalComponent } from './contragents/employees/legal-contragent-actions-modal/legal-contragent-actions-modal.component';
import { SupportCenterActionsModalComponent } from './support-center/actions-modal/actions-modal.component';
import { CreditApplicationButtonsComponent } from './credit-application/buttons/buttons.component';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NbAlertModule,
        NbStepperModule,
        NbCardModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        FormsModule,
        NbButtonModule,
        NbSelectModule,
        NbInputModule,
        NbPopoverModule,
        NbListModule,
        NbDatepickerModule,
        NzPaginationModule,
        NzSelectModule,
        CKEditorModule,
        NbTreeGridModule,
        FusionChartsModule,
        NbAccordionModule,
        NbTabsetModule,
        NbIconModule,
        NzSliderModule,
        DemoNgZorroAntdModule,
        NbEvaIconsModule,
    ],
    declarations: [
        CreateStaffModalComponent,
        EditStaffComponent,
        ChangePasswordModalComponent,
        ConfirmDialogComponent,
        UseHttpImageSourcePipe,
        SearchSelectComponent,
        LocalizationInputsComponent,
        TagActionsModalComponent,
        ProductActionsModalComponent,
        MultipleSearchSelectComponent,
        GalleryComponent,
        ImageActionsModalComponent,
        LocalityActionsModalComponent,
        CustomMapComponent,
        AvatarImgComponent,
        EditorComponent,
        BranchesComponent,
        WeekdaysComponent,
        FeedbacksComponent,
        PaginationComponent,
        DetailComponent,
        NeedToEditComponent,
        PhotoIdnButtonsComponent,
        LightboxImgComponent,
        OpenviduComponent,
        UserVideoComponent,
        OpenViduVideoComponent,
        ImgInputComponent,
        ValidationInputComponent,
        MessengersComponent,
        MessengersActionsModalComponent,
        TableComponent,
        FusionChartComponent,
        CreditApplicationDetailInfoComponent,
        CreditApplicationMoreInfoComponent,
        KibComponent,
        FsIconComponent,
        SocFondComponent,
        IdentificationFilesComponent,
        PassportDataComponent,
        AdditionalInfoComponent,
        UpdateAmountComponent,
        CommentsComponent,
        PhoneNumberInputComponent,
        ContragentsDetailComponent,
        BeneficiaresComponent,
        EmployeesComponent,
        BeneficiaresActionsComponent,
        LegalContractorBeneficiaryActionsComponent,
        LegalContragentActionsModalComponent,
        SupportCenterActionsModalComponent,
        CreditApplicationButtonsComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        ConfirmDialogComponent,
        SearchSelectComponent,
        LocalizationInputsComponent,
        MultipleSearchSelectComponent,
        GalleryComponent,
        UseHttpImageSourcePipe,
        CustomMapComponent,
        AvatarImgComponent,
        EditorComponent,
        BranchesComponent,
        WeekdaysComponent,
        FeedbacksComponent,
        PaginationComponent,
        DetailComponent,
        NeedToEditComponent,
        PhotoIdnButtonsComponent,
        LightboxImgComponent,
        OpenviduComponent,
        UserVideoComponent,
        OpenViduVideoComponent,
        ImgInputComponent,
        ValidationInputComponent,
        MessengersComponent,
        TableComponent,
        FusionChartComponent,
        CreditApplicationDetailInfoComponent,
        CreditApplicationMoreInfoComponent,
        KibComponent,
        FsIconComponent,
        SocFondComponent,
        IdentificationFilesComponent,
        ContragentsDetailComponent,
        PassportDataComponent,
        AdditionalInfoComponent,
        UpdateAmountComponent,
        CommentsComponent,
        PhoneNumberInputComponent,
        BeneficiaresComponent,
        EmployeesComponent,
        BeneficiaresActionsComponent,
        LegalContractorBeneficiaryActionsComponent,
        LegalContragentActionsModalComponent,
        SupportCenterActionsModalComponent,
        CreditApplicationButtonsComponent,
    ],
})
export class ComponentsModule {}
