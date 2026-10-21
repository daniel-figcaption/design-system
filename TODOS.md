# TODO's

## General
- Find a way to organise stories. 2 groups? e.g. ones that showcase use cases vs ones that showcase component variants.
- Use the Storybook `mapping` property to map values to components, e.g. to toggle the control type for the Field component, i.e. a select dropdown with Textbox, Select, etc. Could also pass in child props via `if` and `eq`?
- Setup Storybook in a way that demos the possibilities more than strictly all the React props.
- [DONE] Find out another way to do React.cloneElement when adding classes. Another hook, utility method? Probably just a utility...
- [DONE] Find a way to genericise common component props (like className) using an interface of some sort, and
- Add other common props, like rootAttrs (htmlAttributes ?). This could also replace things like buttonAttributes on the CtaButton component. Also reference valueElAttrs for implementation/naming conventions.
- [DONE] Figure out if some props should be set as children. e.g. the control in a Field component, the Ctas in a CtaSet.
- [DONE] Typing naming conventions: Where I have things like TAccordionSectionComponent, rename Component to Element to make it clear that it's a rendered element, not a component definition.
- [DONE] Fix abstract types like Cta to use new types like TLibCtaComponent and fix complexity.
- Decide on a strategy for React component props: e.g. 2-tier approach, where the original components have React-compatible props (like onClick, className) which aren't necessarily part of the design system concerns. Decide which of these will be visible (or not deactivated) on the Storybook screen. Then for display to the end user for BEM eaching purposes, use Storybook's map feature to come up with controls which are friendlier. Things like CtaButton need onClick to be used effectively in other components like Notice.
- Add Carousel-related components
- [DONE] Add (regular link-based) pagination component
- Genericise defineComponent so that separate functions like defineIconCtaComponent are not needed.
- [DONE] An Alert/Notice component
- [DONE] Breadcrumbs component
- Add header-related components (e.g. Header, SiteLogo, DropdownMenu, MobileMenu)
- [DONE] Genericise the stories files to take care of className and other boilerplate code.
- [DONE] Decide on a better way to organise SCSS utility classes. E.g. the concept of "micro" components? Lower specificity, instead of the typical "utility" concept which overrides everything. Using a "u-" prefix?
- Check: Does the way I'm doing the _container variables make sense?
- Add property in TPropField for fields to be marked as mandatory (*).
- Reorder the children props to be in a more appropriate place instead of always at the bottom of the list, i.e. treat it more like a regular prop.
- Move component Storybook-related files to be in a separate storybook subfolder. Same with component-specific lib files, decorators used exclusively by Storybook.
- Question if we need the line-height CSS vars when we now have the lh unit in CSS.


## ToggleField
- [DONE] Decide if the ToggleField help text should require some sort of formal rich text integration.
- [DONE] Style ToggleField label & helptext rich text elements, maybe with new "pass through" simple rich text mixin that only styles bold, italic, links. inline-rich-text?

## Field
- [DONE] Implement a fallback controlId which can be fed back into the control.
- [DONE] Add an alternative for toggle fields, where <fieldset> and visually hidden <legend> are used.
- [DONE] Add a hook (useControlWithId ?) which adds an ID via clone and returns the new control (and the ID).
- [DONE] Finish adding useControlWithId to other field types.
- Figure out what to do with the error state prop... This currently sits totally separate from the required state on the control within.
- [DONE] Potentially rename `valueElAttrs` and the other variations to `valueElAttrs` or similar. Then remove ID from all control types, and update support methods that reference the old element-named props. This will help when needing to apply further attributes dynamically, like `aria-describedby`. ALTERNATIVE: Create another hook/function that checks `control.type`? BUT removing the `id` prop would reduce duplication...

## Cta
- [DONE] Do we need a `fullWidth` property?

## Select
- Review whether the icon can be applied via pseudo-icon, and not an actual Icon component. Also then possibly remove valueElAttrs.

## SiteLogo
- In future: Update sizing calculations to leverage new attr(data-width px) CSS function;

## Checkbox
- Add indeterminate state?

## Pagination
- Add props to manage all the label and aria-label strings.

## Textarea
- [DONE] Update styling to make the rows/height auto-calculate.
- Update rows prop to potentially be minRows

## SiteHeader
- [DONE] Fix up the placeholder height script and ifinite growth issues.
- Add mobile view with mobile menu component and hamburger icon.

## IconCta
- Add `outsideShape` prop which can be either square/circle. Square makes more sense in some cases (hamburger button).

## CtaSet
- Styling: Find a way to have *link* type CTAs have more gap around them while also having the `<ul>` be shrinkrapped and work when flowing onto multiple rows.

## RichText
- [DONE] Potentially move styles to live in a mixin
- Potentially split up into type sub-files (lists, images etc.)
- Add image (and image alignment) styling

## Accordion
- [DONE] Update to use <details> and <summary>
- [DONE] Add transition animation?
