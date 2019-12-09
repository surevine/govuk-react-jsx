# govuk-react-jsx

View demo at https://andymantell.github.io/govuk-react-jsx/

- Stop using the attributes param of govuk nunjucks (It should just spread any additional props into the element below)
- Switch to className instead of classes (Again, mirroring the govuk nunjucks too closely just isnt helpful)
- Consider general structure of props vs params - do we restructure? Or maybe create React-like adapters
  - Switch html / text combos to just children?
  - attributes to rest spread
  - props that the component just passes through should be left to the rest spread
- Documentation
- Additional things like the base template?
- Additional examples from local yaml files
- Additional tests around interacting with components (Can we pull in from govuk-frontend somehow?)
- Demos of buttons with click events, input elements with change events etc
- Some kind of management around git tags and package versions?
- Remove ignoreAttributes: ['style'] from nunjucks diffing code
- Look for guarded access to deep object properties and replace with optional chaining
- get rid of proptypes
- Document that selected property of select items no longer exists (And add test for it)
