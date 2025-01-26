import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSwitcherComponent } from './ui-switcher.component';

describe('UiSwitcherComponent', () => {
    let component: UiSwitcherComponent;
    let fixture: ComponentFixture<UiSwitcherComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiSwitcherComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(UiSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
