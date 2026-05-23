# TODO's

## General
- Find a way to organise stories. 2 groups? e.g. ones that showcase use cases vs ones that showcase component variants.
- Use the Storybook `mapping` property to map values to components, e.g. to toggle the control type for the Field component, i.e. a select dropdown with Textbox, Select, etc. Could also pass in child props via `if` and `eq`?
- Setup Storybook in a way that demos the possibilities more than strictly all the React props.
- [DONE] Find out another way to do React.cloneElement when adding classes. Another hook, utility method? Probably just a utility...
- [DONE] Find a way to genericise common component props (like className) using an interface of some sort, and
- Add other common props, like rootAttrs (htmlAttributes ?). This could also replace things like buttonAttributes on the CtaButton component.
- Figure out if some props should be set as children. e.g. the control in a Field component, the Ctas in a CtaSet.
- [DONE] Typing naming conventions: Where I have things like TAccordionSectionComponent, rename Component to Element to make it clear that it's a rendered element, not a component definition.
- [DONE] Fix abstract types like Cta to use new types like TLibCtaComponent and fix complexity.
- Add Carousel-related components
- Add (regular link-based) pagination component
- Genericise defineComponent so that separate functions like defineIconCtaComponent are not needed.
- An Alert/Notice component
- Breadcrumbs component
- Add header-related components (e.g. Header, SiteLogo)
- Genericise the stories files to take care of className and other boilerplate code.
- Decide on a better way to organise SCSS utility classes. E.g. the concept of "micro" components? Lower specificity, instead of the typical "utility" concept which overrides everything. Using a "u-" prefix?
- Check: Does the way I'm doing the _container variables make sense?

## Field
- [DONE] Implement a fallback controlId which can be fed back into the control.
- [DONE] Add an alternative for toggle fields, where <fieldset> and visually hidden <legend> are used.
- [DONE] Add a hook (useControlWithId ?) which adds an ID via clone and returns the new control (and the ID).
- [DONE] Finish adding useControlWithId to other field types.
- Figure out what to do with the error state prop... This currently sits totally separate from the required state on the control within.
- [DONE] Potentially rename `valueElAttrs` and the other variations to `valueElAttrs` or similar. Then remove ID from all control types, and update support methods that reference the old element-named props. This will help when needing to apply further attributes dynamically, like `aria-describedby`. ALTERNATIVE: Create another hook/function that checks `control.type`? BUT removing the `id` prop would reduce duplication...

## Cta
- Do we need a `fullWidth` property?

## IconCta
- Add `outsideShape` prop which can be either square/circle. Square makes more sense in some cases (hamburger button).

## CtaSet
- Styling: Find a way to have *link* type CTAs have more gap around them while also having the `<ul>` be shrinkrapped and work when flowing onto multiple rows.

## RichText
- Potentially move styles to live in a mixin and split up into types (lists, etc.)
- Add image (and image alignment) styling

## Accordion
- [DONE] Update to use <details> and <summary>
- Add transition animation?