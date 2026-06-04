import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { ControlFLow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComp } from './components/signal-comp/signal-comp';

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
    }

];
