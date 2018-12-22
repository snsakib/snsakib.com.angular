import {
  trigger,
  transition,
  style,
  query,
  group,
  animate
} from "@angular/animations";

export const zoomInSlideOutAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        })
      ],
      { optional: true }
    ),
    group([
      query(":leave", [animate(".2s ease-in", style({ opacity: 0 }))], {
        optional: true
      }),
      query(":enter", [style({ opacity: 0 }), animate(".2s ease-out")], {
        optional: true
      })
    ])
  ])
]);
