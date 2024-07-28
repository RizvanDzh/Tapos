import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAtotComponent } from './feature-atot.component';

describe('FeatureAtotComponent', () => {
    let component: FeatureAtotComponent;
    let fixture: ComponentFixture<FeatureAtotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureAtotComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureAtotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
