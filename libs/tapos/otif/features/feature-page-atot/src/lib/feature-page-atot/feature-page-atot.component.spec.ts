import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePageAtotComponent } from './feature-page-atot.component';

describe('FeaturePageAtotComponent', () => {
    let component: FeaturePageAtotComponent;
    let fixture: ComponentFixture<FeaturePageAtotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeaturePageAtotComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeaturePageAtotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
