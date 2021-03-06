// NG2
import { RouterModule } from '@angular/router';
// APP
import { Home } from './../pages/home/Home';
import { ColorComponent, TypographyComponent, CompositionComponent, IconographyComponent } from './../pages/design';
import { PipesDemoComponent, UtilsDemoComponent, AppBridgeDemoComponent } from './../pages/utils';
import {
    ButtonDemoComponent,
    LoadingDemoComponent,
    CardDemoComponent,
    ToastDemoComponent,
    TooltipDemoComponent,
    HeaderDemoComponent,
    TabsDemoComponent,
    TilesDemoComponent,
    ModalDemoComponent,
    QuickNoteDemoComponent,
    RadioDemoComponent,
    DropdownDemoComponent,
    SelectDemoComponent,
    ListDemoComponent,
    SwitchDemoComponent,
    DrawerDemoComponent,
    DragulaDemoComponent,
    SlidesDemoComponent,
    PickerDemoComponent,
    ChipsDemoComponent,
    CalendarDemoComponent,
    DatePickerDemoComponent,
    EditorDemoComponent,
    TipWellDemoComponent,
    TableDemoComponent,
    FormDemoComponent,
    CategoryDropdownDemoComponent,
    MultiPickerDemoComponent,
    PopOverDemoComponent,
    FieldInteractionsDemoComponent,
    SimpleTableDemoComponent,
    SearchDemoComponent,
    FormGroupedDemoComponent,
    ValueDemoComponent
} from './../pages/elements';

export const routes: any = [
    { path: '', component: Home },
    { path: 'home', component: Home },

    // Base Pages (design system)
    { path: 'color', component: ColorComponent, title: 'Color', section: 'design' },
    { path: 'composition', component: CompositionComponent, title: 'Composition', section: 'design' },
    { path: 'typography', component: TypographyComponent, title: 'Typography', section: 'design' },
    { path: 'icons', component: IconographyComponent, title: 'Iconography', section: 'design' },

    // Element/Component/Service/etc.. Demos
    { path: 'button', component: ButtonDemoComponent, title: 'Buttons', section: 'components' },
    { path: 'radio', component: RadioDemoComponent, title: 'Radio', section: 'components' },
    { path: 'quick-note', component: QuickNoteDemoComponent, title: 'Quick Note', section: 'components' },
    { path: 'modal', component: ModalDemoComponent, title: 'Modal', section: 'components' },
    { path: 'form', component: FormDemoComponent, title: 'Form', section: 'components' },
    { path: 'form-grouped', component: FormGroupedDemoComponent, title: 'Form Groups', section: 'components' },
    { path: 'toast', component: ToastDemoComponent, title: 'Toast', section: 'components' },
    { path: 'tooltip', component: TooltipDemoComponent, title: 'Tooltip', section: 'components' },
    { path: 'cards', component: CardDemoComponent, title: 'Cards', section: 'components' },
    { path: 'loading', component: LoadingDemoComponent, title: 'Loading', section: 'components' },
    { path: 'dropdown', component: DropdownDemoComponent, title: 'Dropdown', section: 'components' },
    { path: 'picker', component: PickerDemoComponent, title: 'Picker', section: 'components' },
    { path: 'multi-picker', component: MultiPickerDemoComponent, title: 'MultiPicker', section: 'components' },
    { path: 'chips', component: ChipsDemoComponent, title: 'Chips', section: 'components' },
    { path: 'select', component: SelectDemoComponent, title: 'Select', section: 'components' },
    { path: 'tabs', component: TabsDemoComponent, title: 'Tabs', section: 'components' },
    { path: 'table', component: TableDemoComponent, title: 'Table', section: 'components' },
    { path: 'simple-table', component: SimpleTableDemoComponent, title: 'Simple Table', section: 'components' },
    { path: 'list', component: ListDemoComponent, title: 'List', section: 'components' },
    { path: 'header', component: HeaderDemoComponent, title: 'Header', section: 'components' },
    { path: 'switch', component: SwitchDemoComponent, title: 'Switch', section: 'components' },
    { path: 'search', component: SearchDemoComponent, title: 'Search', section: 'components' },
    { path: 'drawer', component: DrawerDemoComponent, title: 'Drawer', section: 'components' },
    { path: 'calendar', component: CalendarDemoComponent, title: 'Calendar', section: 'components' },
    { path: 'date-picker', component: DatePickerDemoComponent, title: 'Date Picker', section: 'components' },
    { path: 'dragula', component: DragulaDemoComponent, title: 'Dragula', section: 'components' },
    { path: 'tiles', component: TilesDemoComponent, title: 'Tiles', section: 'components' },
    { path: 'slides', component: SlidesDemoComponent, title: 'Slides', section: 'components' },
    { path: 'editor', component: EditorDemoComponent, title: 'Editor', section: 'components' },
    { path: 'tipwell', component: TipWellDemoComponent, title: 'Tip Well', section: 'components' },
    { path: 'category-dropdown', component: CategoryDropdownDemoComponent, title: 'Category Dropdown', section: 'components' },
    { path: 'popover', component: PopOverDemoComponent, title: 'PopOver', section: 'components' },
    { path: 'value', component: ValueDemoComponent, title: 'Value', section: 'components' },

    // Utils
    { path: 'utils', component: UtilsDemoComponent, title: 'Utils', section: 'utils' },
    { path: 'pipes', component: PipesDemoComponent, title: 'Pipes', section: 'utils' },
    { path: 'app-bridge', component: AppBridgeDemoComponent, title: 'App Bridge', section: 'utils' },
    { path: 'field-interactions', component: FieldInteractionsDemoComponent, title: 'Field Interactions', section: 'utils' },

    // Catch All
    { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
