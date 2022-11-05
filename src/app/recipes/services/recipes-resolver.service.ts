import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { Recipe } from "../data/recipe.model";


@Injectable({providedIn: 'root'})
export class RecipesResolverService {

    constructor(private dataStorageService: DataStorageService) {}

}