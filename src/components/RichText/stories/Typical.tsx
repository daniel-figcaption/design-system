import type { StoryObj } from '@storybook/react';
import Component from '../RichText';

export const props: React.ComponentProps<typeof Component> = {
  children: (
    <>
      <h2>Sample rich text</h2>
      <p>Lorem ipsum dolor sit amet, <a href="#x">consectetur adipiscing elit.</a> Proin a tristique lorem. Curabitur blandit erat ultrices, rutrum urna gravida, ornare nisi.</p>
      <hr />
      <p>Duis consectetur <b>turpis sodales</b> nisl rutrum, id <strong>varius metus mollis</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia tempus ante quis bibendum.</p>
      <h3>Proin interdum neque pharetra</h3>
      <p>Duis in <i>risus vel ipsum lobortis</i> laoreet in nec mi. <em>Sed auctor blandit</em> varius. Proin interdum neque pharetra ante fermentum dapibus.</p>
      <ul>
        <li><p>Integer a urna lobortis, facilisis libero at, venenatis nibh.</p></li>
        <li>
          Etiam eleifend laoreet ullamcorper. In ut nulla ac nisl ullamcorper tincidunt:
          <ul>
            <li>First item</li>
            <li>
              <p>Second item</p>
              <ul>
                <li>
                  <p>In ut nulla ac nisl ullamcorper tincidunt. Vivamus pellentesque aliquam sapien ullamcorper auctor.</p>
                  <p>Donec non velit viverra, gravida ligula a, finibus ante.</p>
                </li>
                <li>Aenean tristique dolor sit amet diam placerat dignissim.</li>
              </ul>
            </li>
          </ul>
          Fusce lorem velit, tincidunt quis lorem sed, aliquet iaculis eros. In ut nulla ac nisl ullamcorper tincidunt.
        </li>
        <li>Vivamus tincidunt augue magna, eget rhoncus turpis interdum sed. liquam erat volutpat. Proin pellentesque efficitur aliquet.</li>
        <li>Etiam maximus leo et velit accumsan aliquam. Morbi rutrum magna ut semper vulputate.</li>
      </ul>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ut accumsan nulla.</p>
      <h4>Nullam dictum scelerisque quam quis congue</h4>
      <p>Fusce lorem velit, tincidunt quis lorem sed, aliquet iaculis eros. In ut nulla ac nisl ullamcorper tincidunt. Vivamus pellentesque aliquam sapien ullamcorper auctor.</p>
      <p>Donec non velit viverra, gravida ligula a, finibus ante. Donec faucibus sapien quis orci vehicula, in auctor diam fermentum. Proin id bibendum massa.</p>
      <h4>Fusce lorem velit</h4>
      <h5>Donec faucibus sapien quis orci vehicula</h5>
      <ol>
        <li>Sed varius arcu quis metus commodo, in egestas elit rhoncus. Aliquam erat volutpat. Proin pellentesque efficitur aliquet.</li>
        <li>
          <ol>
            <li>Etiam cursus massa pulvinar, feugiat nisi ac, elementum leo.</li>
            <li>
              Nullam dictum scelerisque quam quis congue:
              <ol>
                <li>Fusce lorem velit, tincidunt quis lorem sed, aliquet iaculis eros. In ut nulla ac nisl ullamcorper tincidunt. Vivamus pellentesque aliquam sapien ullamcorper auctor.</li>
                <li>Phasellus mattis eget risus ac lacinia.</li>
              </ol>
            </li>
            <li>Aliquam pulvinar porttitor tellus, vel porttitor lacus vehicula sed.</li>
          </ol>
        </li>
        <li>Cras auctor gravida tempus. Curabitur posuere augue quis massa condimentum vestibulum. Etiam molestie ligula ut quam rutrum fringilla.</li>
        <li>Maecenas pulvinar placerat risus sed convallis. Phasellus mattis eget risus ac lacinia. Praesent volutpat est sed ligula tristique scelerisque.</li>
      </ol>
      <p>Suspendisse quis hendrerit erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc rhoncus pretium blandit. Curabitur euismod ex id pharetra ultrices.</p>
      <p>Aenean tristique dolor sit amet diam placerat dignissim. Vestibulum scelerisque turpis at nunc porttitor vulputate. Proin nulla dui, porta et maximus eu, consequat sed urna.</p>
      <p>Cras mattis dignissim tortor, sit amet pharetra ipsum elementum nec.</p>
    </>
  ),
};

const Story: StoryObj<typeof Component> = {
  args: props,
};

export default Story;
