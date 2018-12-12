
import './styles/app.scss';
import PullToRefresh from 'pulltorefreshjs';
import anime from 'animejs';
import 'hammerjs';

// ------ Setting up hammer

const mc = new Hammer(document.getElementById('myElement'));

const animateEl = (dir) => {
	return anime({
		targets: myElement,
		translateY: () => {
			if(dir === 16) {
				return '+=150';
			} else if (dir === 8) {
				return '-=150';
			}
		},
		duration: 300,
	});
}
	
mc.on("swipedown swipeup", function(ev) {
	animateEl(ev.direction);
});

// ---------------------------- LETS SEE HOW THIS WILL GO...

const ptr = PullToRefresh.init({
  mainElement: '#myElement', // above which element?
  onRefresh: function (done) {
    setTimeout(function () {
      done(); // end pull to refresh
      alert('refresh');
    }, 1500);
  }
});
