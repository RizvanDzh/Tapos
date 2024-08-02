import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtotSectionComponent } from './atot-section.component';

describe('AtotSectionComponent', () => {
    let component: AtotSectionComponent;
    let fixture: ComponentFixture<AtotSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AtotSectionComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AtotSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
