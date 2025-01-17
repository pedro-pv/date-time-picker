/**
 * dialog.service
 */
import { InjectionToken, Injector, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { OwlDialogConfig, OwlDialogConfigInterface } from './dialog-config.class';
import { OwlDialogRef } from './dialog-ref.class';
import { Observable, Subject } from 'rxjs';
import { Overlay, OverlayContainer, ScrollStrategy } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare const OWL_DIALOG_DATA: InjectionToken<any>;
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * */
export declare const OWL_DIALOG_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
export declare function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => ScrollStrategy;
/** @docs-private */
export declare const OWL_DIALOG_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
/**
 * Injection token that can be used to specify default dialog options.
 * */
export declare const OWL_DIALOG_DEFAULT_OPTIONS: InjectionToken<OwlDialogConfig>;
export declare class OwlDialogService {
    private overlay;
    private injector;
    private location;
    private defaultOptions;
    private parentDialog;
    private overlayContainer;
    private ariaHiddenElements;
    private _openDialogsAtThisLevel;
    private _afterOpenAtThisLevel;
    private _afterAllClosedAtThisLevel;
    /** Keeps track of the currently-open dialogs. */
    get openDialogs(): OwlDialogRef<any>[];
    /** Stream that emits when a dialog has been opened. */
    get afterOpen(): Subject<OwlDialogRef<any>>;
    get _afterAllClosed(): any;
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    afterAllClosed: Observable<{}>;
    private readonly scrollStrategy;
    constructor(overlay: Overlay, injector: Injector, location: Location, scrollStrategy: any, defaultOptions: OwlDialogConfigInterface, parentDialog: OwlDialogService, overlayContainer: OverlayContainer);
    open<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: OwlDialogConfigInterface): OwlDialogRef<any>;
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll(): void;
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    getDialogById(id: string): OwlDialogRef<any> | undefined;
    private attachDialogContent;
    private createInjector;
    private createOverlay;
    private attachDialogContainer;
    private getOverlayConfig;
    private removeOpenDialog;
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */
    private hideNonDialogContentFromAssistiveTechnology;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDialogService, [null, null, { optional: true; }, null, { optional: true; }, { optional: true; skipSelf: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OwlDialogService>;
}
