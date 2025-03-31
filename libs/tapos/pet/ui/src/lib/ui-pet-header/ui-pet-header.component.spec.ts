import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPetHeaderComponent } from './ui-pet-header.component';

describe('UiPetHeaderComponent', () => {
    let component: UiPetHeaderComponent;
    let fixture: ComponentFixture<UiPetHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiPetHeaderComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(UiPetHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
