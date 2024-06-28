/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('MoviesComponent', () => {
    let component: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;    

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [ MoviesComponent ],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                provideRouter([])
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(MoviesComponent);
        component = fixture.componentInstance;
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
