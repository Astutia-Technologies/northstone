import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, r as object, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties-DPRS_0Py.js
var $$splitComponentImporter = () => import("./properties-YoQNSJpz.mjs");
var searchSchema = object({
	type: _enum(["rent", "buy"]).optional(),
	location: string().optional(),
	beds: string().optional(),
	propertyType: string().optional(),
	maxPrice: string().optional()
});
var Route = createFileRoute("/properties")({
	validateSearch: searchSchema,
	head: ({ search }) => {
		const location = search.location?.trim();
		const title = location ? `Properties in ${location} — Northstone` : "Properties — Northstone Property Management";
		return { meta: [
			{ title },
			{
				name: "description",
				content: "Browse available properties to rent or buy across Scotland and the UK."
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: "Find your next property with Northstone Property Management."
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
