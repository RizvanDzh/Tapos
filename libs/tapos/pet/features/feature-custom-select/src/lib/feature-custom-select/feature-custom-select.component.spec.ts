import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCustomSelectComponent } from './feature-custom-select.component';

describe('FeatureCustomSelectComponent', () => {
    let component: FeatureCustomSelectComponent;
    let fixture: ComponentFixture<FeatureCustomSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureCustomSelectComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureCustomSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
