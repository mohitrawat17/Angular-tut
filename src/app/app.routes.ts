import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { ControlFLow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComp } from './components/signal-comp/signal-comp';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';

export const routes: Routes = [
    {
        path: 'user',
        component: User
    },
    {
        path: 'control-flow',
        component: ControlFLow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: SignalComp
    },
    {
        path: 'attribute-directive',
        component: AttributeDirective
    }

];
