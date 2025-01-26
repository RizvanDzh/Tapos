import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePageGrsComponent } from './feature-page-grs.component';

describe('FeaturePageGrsComponent', () => {
    let component: FeaturePageGrsComponent;
    let fixture: ComponentFixture<FeaturePageGrsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeaturePageGrsComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeaturePageGrsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
