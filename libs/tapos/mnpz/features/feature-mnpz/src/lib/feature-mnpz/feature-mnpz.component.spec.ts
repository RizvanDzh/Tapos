import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureMnpzComponent } from './feature-mnpz.component';

describe('FeatureMnpzComponent', () => {
    let component: FeatureMnpzComponent;
    let fixture: ComponentFixture<FeatureMnpzComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureMnpzComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureMnpzComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
