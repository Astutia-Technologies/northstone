import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getPropertyBySlug } from "./properties-e_hn0MgK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._slug-CzqrrIUF.js
var $$splitComponentImporter = () => import("./properties._slug-GXZZwnAa.mjs");
var Route = createFileRoute("/properties/$slug")({
	head: ({ params }) => {
		const property = getPropertyBySlug(params.slug);
		const title = property ? `${property.title} — Northstone` : "Property not found — Northstone";
		return { meta: [
			{ title },
			{
				name: "description",
				content: property?.description ?? "Property listing not found."
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: property?.description ?? ""
			},
			...property ? [{
				property: "og:image",
				content: property.image
			}] : []
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
