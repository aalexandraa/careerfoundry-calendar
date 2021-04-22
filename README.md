# cf-calendar: CareerFoundry Coding Challenge Solution

The react app is deployed [here on GitHub pages](https://aalexandraa.github.io/cf-calendar).

## Install

Install dependencies via yarn:

```sh
yarn
```

## Running the dev server

Run the app in development mode:

```sh
yarn start
```

This should open a browser window showing the booking tool.

## Tools & libraries used

- React as UI library
- [Create React App](https://github.com/facebook/create-react-app) for dev server and build
- swr for remote data fetching
- date-fns for date parsing and manipulation. There is simply too much that will go wrong if you try doing it yourself.
- Tailwind for rapid styling

## Reasoning for decisions made

Start with a date picker. Students probably want to pick a mentor call in the near future so we’re showing a very simple datepicker of the current month with today being highlighted.

As per requirements, clicking on a day will open a view which shows all time slots on a day, including free slots and unavailable slots, whether they're booked or in the past.

I decided to not only show the time slots of a given day, but include the surrounding days in a somewhat typical calendar week-view fashion. The reason for this is is to give the student additional context and options for picking other dates that might be more suitable for them without having them to click through every single day manually. Also this seems ot naturally make sense since there is a lot of space available for showing aligned time slots which would otherwise simply be wasted. Note that this also works great on mobile.

Clicking on a time slot switches to the booking form view. The booking view shows the name of the mentor and the selected date and time for context, and allows the student to enter the reason for their appointment into a large input field with simple native validation.

Submiting the form will simulate a successful submission by saving the appointment in memory instead of a backend. If the submission went to a careerfoundry backend, I’d expect the response to include an updated list of allocated time slots, or a simple status message which would let me refresh the state by re-fetching the alocations.

I haven’t spent any time optimizing performance in terms of not recomputing everything all the time, putting everything into optimized data structures or splitting the app into smaller chunks.

## Accessibility

Everything interactive is a button that can be focused via tab or screen reader tools.
