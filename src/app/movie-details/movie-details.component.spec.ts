/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('MovieDetailsComponent', () => {
    let component: MovieDetailsComponent;
    let fixture: ComponentFixture<MovieDetailsComponent>;
    
    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [ MovieDetailsComponent ],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                provideRouter([])
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(MovieDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
