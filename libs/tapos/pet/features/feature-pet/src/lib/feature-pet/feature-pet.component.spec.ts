import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePetComponent } from './feature-pet.component';

describe('FeaturePetComponent', () => {
    let component: FeaturePetComponent;
    let fixture: ComponentFixture<FeaturePetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeaturePetComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeaturePetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
