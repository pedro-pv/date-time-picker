/**
 * dialog-container.component
 */
import { ChangeDetectorRef, ComponentRef, ElementRef, EmbeddedViewRef, EventEmitter, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { OwlDialogConfigInterface } from './dialog-config.class';
import * as i0 from "@angular/core";
export declare class OwlDialogContainerComponent extends BasePortalOutlet implements OnInit {
    private changeDetector;
    private elementRef;
    private focusTrapFactory;
    private document;
    portalOutlet: CdkPortalOutlet | null;
    /** The class that traps and manages focus within the dialog. */
    private focusTrap;
    /** ID of the element that should be considered as the dialog's label. */
    ariaLabelledBy: string | null;
    /** Emits when an animation state changes. */
    animationStateChanged: EventEmitter<AnimationEvent>;
    isAnimating: boolean;
    private _config;
    get config(): OwlDialogConfigInterface;
    private state;
    private params;
    private elementFocusedBeforeDialogWasOpened;
    get owlDialogContainerClass(): boolean;
    get owlDialogContainerTabIndex(): number;
    get owlDialogContainerId(): string;
    get owlDialogContainerRole(): string;
    get owlDialogContainerAriaLabelledby(): string;
    get owlDialogContainerAriaDescribedby(): string;
    get owlDialogContainerAnimation(): any;
    constructor(changeDetector: ChangeDetectorRef, elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, document: any);
    ngOnInit(): void;
    /**
     * Attach a ComponentPortal as content to this dialog container.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    setConfig(config: OwlDialogConfigInterface): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationDone(event: AnimationEvent): void;
    startExitAnimation(): void;
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     */
    private calculateZoomOrigin;
    /**
     * Save the focused element before dialog was open
     */
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDialogContainerComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlDialogContainerComponent, "owl-dialog-container", never, {}, {}, never, never>;
}
