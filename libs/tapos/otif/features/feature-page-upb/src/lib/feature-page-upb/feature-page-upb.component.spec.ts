import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePageUpbComponent } from './feature-page-upb.component';

describe('FeaturePageUpbComponent', () => {
    let component: FeaturePageUpbComponent;
    let fixture: ComponentFixture<FeaturePageUpbComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeaturePageUpbComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeaturePageUpbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
