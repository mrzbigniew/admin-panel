import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MenuDataLoaderService } from "./menu-data-loader.service";

describe("MenuDataLoaderService", () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let service: MenuDataLoaderService;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                MenuDataLoaderService
            ]
        });

        injector = getTestBed();
        service = injector.get(MenuDataLoaderService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });


    it("should load menu data items", () => {


    });
});